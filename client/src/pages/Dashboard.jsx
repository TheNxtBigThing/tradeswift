// Dashboard.js
import React, { useState } from 'react';
import Content from '../components/Content';
import Drawer from '../components/Drawer';
import Rightbar from '../components/Rightbar';
import useMediaQuery from "@mui/material/useMediaQuery";
import { Menu } from "@mui/icons-material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState('item1');
  const isNonMobileScreen = useMediaQuery("(min-width:1000px)");
  const [toggle, setToggle] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className='flex w-screen'>

{!isNonMobileScreen && (
              <div className='rounded-full border-2 p-1 absolute top-10 z-[1000]'>
                {!toggle ? (
                  <Menu
                    className="cursor-pointer"
                    onClick={() => setToggle(!toggle)}
                  />
                ) : (
                  <CancelOutlinedIcon
                    className=" cursor-pointer"
                    onClick={() => setToggle(!toggle)}
                  />
                )}
              </div>
            )}
            {
              isNonMobileScreen && (                <Drawer onItemClick={handleItemClick} />
              )
            }
            {
              !isNonMobileScreen && toggle && (
                <Drawer onItemClick={handleItemClick} />

              )
            }
            
      <Content selectedItem={selectedItem} />
      {
        isNonMobileScreen && (<Rightbar />)
      }
    </div>
  );
};

export default Dashboard;
