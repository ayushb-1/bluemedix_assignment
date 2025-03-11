import React from 'react';

const Sidebar = () => {
  return (
    <div id="hs-sidebar-basic-usage" className="fixed top-0 left-0 w-64 h-full bg-white border-r border-gray-200">
      <div className="relative flex flex-col h-full">
        <header className="p-4 flex justify-between items-center mb-6">
          <a className="flex-none font-semibold text-xl text-[#535bf2]" href="/" aria-label="Brand">BlueMedix</a>
        </header>

        <nav className="h-full overflow-y-auto">
          <div className="pb-0 px-2 w-full flex flex-col flex-wrap">
            <ul className="space-y-3">
              <li>
                <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100" href="/users">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7v1m0 13a1 1 0 11-2 0 1 1 0 012 0zM5 7v1a1 1 0 001 1h6a1 1 0 001-1V7a1 1 0 00-1-1H5a1 1 0 00-1 1z" />
                  </svg>
                  Users
                </a>
              </li>

              <li>
                <a className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-800 rounded-lg hover:bg-gray-100" href="/products">
                  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path d="M3 3h7v7a2 2 0 002 2h7a2 2 0 002-2V3zm0 9h7V3H3v9zm10-5h-7v7h7V4z" />
                  </svg>
                  Products
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
