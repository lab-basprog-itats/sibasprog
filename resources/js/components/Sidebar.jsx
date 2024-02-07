
                        <CubeTransparentIcon className="h-5 w-5 mr-2" />
                        <a href="#">{option}</a>
                    </li>
                ))}
            </ul>
            <button
                className="absolute bottom-4 left-4 text-blue-700"
                onClick={toggleSidebar}
            >
                {isSidebarOpen ? "Close" : "Open"}
            </button>
        </aside>
    );
>>>>>>> dev
};

export default Sidebar;
