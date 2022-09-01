
import { Link } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { useAppState } from "../service/AppStateContext.tsx";


export const SideMenu = () => {
    const { state } = useAppState();
    console.log("****state", state);
    return (
        <div className="">
            <ProSidebar rtl={false}>
                <Menu iconShape="square">
                    <MenuItem>דף הבית
                        <Link to="/"></Link>
                    </MenuItem>
                    <MenuItem>שולחנות
                        <Link to="/tables"></Link>
                    </MenuItem>
                    <SubMenu title="תפריט">
                        <MenuItem>תפריט מלא
                            <Link to="/menus"></Link>
                        </MenuItem>
                        <MenuItem>מנות ראשונות
                            <Link to="/menus/starter"></Link>
                        </MenuItem>
                        <MenuItem>מרקים
                            <Link to="/menus/Soups"></Link>
                        </MenuItem>
                        <MenuItem>מנה עיקרית
                            <Link to="/menus/MainCourse"></Link>
                        </MenuItem>
                        <MenuItem>קינוחים
                            <Link to="/menus/desserts"></Link>
                        </MenuItem>
                    </SubMenu>
                    <SubMenu title="לקוחות">
                        <MenuItem>כל הלקוחות
                            <Link to="/diners"></Link>
                        </MenuItem><MenuItem>ממתינים לשולחן
                            <Link to="/diners/tobeSitted"></Link>
                        </MenuItem><MenuItem>ממתינים לשרות
                            <Link to="/diners/sitting"></Link>
                        </MenuItem><MenuItem>ממתינים לתשלום
                            <Link to="/diners/awaitingBill"></Link>
                        </MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>
        </div>
    );
};

export default SideMenu;