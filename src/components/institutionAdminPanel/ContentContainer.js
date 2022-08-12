
import StudentApprovals from "./StudentApprovals";
import Constant from "../../constants/Constant";
import Departments from "./Departments";

const ContentContainer = ({activeMenu}) => {

    const sideMenu = Constant.instituteSideMenu;

    return (
        <div>
            {activeMenu == sideMenu[0] && <Departments/>}
            {activeMenu == sideMenu[1] && <StudentApprovals/>}
        </div>
    );
}

export default ContentContainer;