
import { Divider } from "antd";
import { fontlg, pylg } from "../utils/constant";
import Reveal from "./Animation/Reveal";

export const CustomDivider = ({ title }) => {
    return (
        <div>
            <Reveal width="w-full" className={"mx-auto"}>
                <Divider
                    className={`${pylg} !my-0`}
                    style={{
                        borderColor: "#000",
                    }}
                >
                    <p className={`${fontlg} font-bold`}>
                        {title}
                    </p>
                </Divider>
            </Reveal>
        </div>
    );
};
