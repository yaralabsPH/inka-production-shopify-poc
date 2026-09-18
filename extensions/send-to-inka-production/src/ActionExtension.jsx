import '@shopify/ui-extensions/preact';
import {render} from 'preact';
import {useState} from 'preact/hooks';

export default async () => {
  render(<Extension />, document.body);
};

function Extension() {
  const {close, data} = shopify;
  const selectedOrders = data.selected ?? [];
  const [codename, setCodename] = useState('');
  const [testSuccessful, setTestSuccessful] = useState(false);

  function runTest() {
    console.log({
      codename,
      selectedOrderIds: selectedOrders.map((order) => order.id),
    });
    setTestSuccessful(true);
  }

  return (
    <s-admin-action>
      <s-stack direction="block">
        <s-text>
          {selectedOrders.length}{' '}
          {selectedOrders.length === 1 ? 'order' : 'orders'} selected
        </s-text>
        <s-text-field
          label="Codename"
          value={codename}
          onChange={(event) => setCodename(event.target.value)}
        />
        {testSuccessful && <s-text tone="success">Test successful</s-text>}
      </s-stack>
      <s-button slot="primary-action" variant="primary" onClick={runTest}>
        Test
      </s-button>
      <s-button slot="secondary-actions" onClick={close}>
        Cancel
      </s-button>
    </s-admin-action>
  );
}
