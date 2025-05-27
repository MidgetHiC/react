/*import { MouseEvent } from "react";*/
import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void; // onClick
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  /*Hook specifically a state hook*/
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //items = [];

  return (
    <>
      <h1>{heading}</h1> {/*React.createElement('h1')*/}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li 
            className={ 
              selectedIndex === index 
                ? 'list-group-item active'
                : 'list-group-item'
            }
            key={item} 
            onClick={() => { 
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
