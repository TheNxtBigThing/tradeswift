// Content.js
import React from 'react';
import FileTrade from './FileTrade'; // Make sure the path is correct

const Content = ({ selectedItem }) => {
  return (
    <div className=" text-black w-10/12 dark:text-white p-8">
      {selectedItem === 'filetrade' && <FileTrade />}
      {selectedItem === 'item2' && <p>Content for Item 2</p>}
      {selectedItem === 'item3' && <p>Content for Item 3</p>}
      {selectedItem === 'item4' && <p>Content for Item 4</p>}
      {selectedItem === 'item5' && <p>Content for Item 5</p>}
    </div>
  );
};

export default Content;
