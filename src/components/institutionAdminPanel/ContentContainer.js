
import StudentApprovals from "./StudentApprovals";
import Constant from "../../constants/Constant";
import Departments from "./Departments";

const ContentContainer = ({activeMenu}) => {

    const sideMenu = Constant.instituteSideMenu;

    return (
        <div>
            {activeMenu == sideMenu[0] && <StudentApprovals/>}
            {activeMenu == sideMenu[1] && <Departments/>}
        </div>
    );
}

export default ContentContainer;