import 'react-pro-sidebar/dist/css/styles.css';
import { useAppState } from "../service/AppStateContext.tsx";
import "../App.css"


export const NaveMenu = (props) => {
    console.log(props.location)
    const split = props.location.split('/');
    const split1 = split[split.length-1]
    const split2 = split[split.length-2]
    let NavbarButton1 = "NavbarButton1"
    let NavbarButton2 = "NavbarButton2"
    let NavbarButton3 = "NavbarButton3"
    let NavbarButton4 = "NavbarButton4"

    console.log("sppppppppp", split)

    if (split1 == ""){
        NavbarButton1 = "NavbarButton"
    }
    if (split1 == "menu"){
        NavbarButton2 = "NavbarButton"
    }
    if (split1 == "diners"){
        NavbarButton3 = "NavbarButton"
    }
    if (split1 == "tables"){
        NavbarButton4 = "NavbarButton"
    }
    if (split2 == "menu"){
        NavbarButton2 = "NavbarButton"
    }
    if (split2 == "diners"){
        NavbarButton3 = "NavbarButton"
    }
    if (split2 == "tables"){
        NavbarButton4 = "NavbarButton"
    }
    const { state } = useAppState();
    console.log("****state", state);
    return (
        <>
            <div class="navbar">
              <div id={NavbarButton1} class="navbarButton" onClick={() => window.location.href="/"}>בית</div>
              <div id={NavbarButton2} class="navbarButton" onClick={() => window.location.href="/menu"}>תפריט</div>
              <div id={NavbarButton3} class="navbarButton" onClick={() => window.location.href="/diners"}>לקוחות</div>
              <div id={NavbarButton4} class="navbarButton" onClick={() => window.location.href="/tables"}>שולחנות</div>
            </div>
        </>
    );
};

export default NaveMenu;