/*import ListGroup from './components/ListGroup.tsx';
import Alert from './components/Alert.tsx';*/
import Button from './components/Button.tsx';

function App() {
  /*const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }*/

  const handleButton = (text: string) => {
    console.log(text);
  }

  return (
    <div>
      {/*<ListGroup 
        items={items} 
        heading="Cities" 
        onSelectItem={handleSelectItem} 
      />
      <Alert>
        Hello <span>World</span>
      </Alert>*/}
      <Button text={'I\'ve Been Clicked'} onClicked={handleButton}>
        Click Me!
      </Button>
    </div>
  );
}

export default App;