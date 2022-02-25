import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import Header from "../components/Header";

const fileTypes = ["JPG", "PNG", "GIF", "PDF", "TXT",];

function fileupload() {
    const [file, setFile] = useState(null);
    const handleChange = file => {
        setFile(file);
    };
    return (
        <div>
        <Header />
        <div className="flex flex-col items-center justify-center p-5 min-h-screen bg-yellow-50">
            <h3>File Dropper</h3>
            <FileUploader
                handleChange={handleChange}
                name="file"
                types={fileTypes}
            />
        </div>
        </div>
    )
}

export default fileupload
