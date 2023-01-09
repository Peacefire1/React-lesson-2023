import ChildButton from "./ChildButton";

export default function UplaodButton() {
    return (
        <ChildButton onClick={() => alert("Uploading!")}>
            Upload Image
        </ChildButton>
    )
}