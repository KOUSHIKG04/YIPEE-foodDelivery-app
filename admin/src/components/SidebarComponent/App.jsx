import React from 'react';
import Navbar from './components/Navbar';
import Sidebar, { SidebarItem } from './components/Sidebar';
import { HomeIcon, UserIcon, SettingsIcon } from "lucide-react"; // Example icons

const App = () => {
  return (
    <div className="flex">
      <Sidebar>
        <SidebarItem icon={<HomeIcon />} text="Home" active />
        <SidebarItem icon={<UserIcon />} text="Profile" />
        <SidebarItem icon={<SettingsIcon />} text="Settings" alert />
      </Sidebar>
      <div className="flex-1">
        <Navbar />
        <div className="p-6">Your content here...</div>
      </div>
    </div>
  );
}

export default App;
