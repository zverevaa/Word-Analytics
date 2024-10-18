import { useState } from "react";
import Warning from "./Warning";

export default function TextArea(props) {
    const [warningText, setWarningText] = useState("");

    const handleChange = (e) => {
        let newText = e.target.value;

        if (newText.includes("<script>")) {
            console.log("nope");
            newText = newText.replace("<script>", "");
            setWarningText("Script tag is now allowed");
        } else if (newText.includes("@")) {
            newText = newText.replace("@", "");
            setWarningText("@ is not allowed");
        } else {
            setWarningText("");
        }

        props.setText(newText);
    };

    return (
        <div className="textarea">
            <textarea
                value={props.text}
                onChange={handleChange}
                placeholder="Enter your text"
                spellCheck="false"
            />
            <Warning warning={warningText} />
        </div>
    );
}
