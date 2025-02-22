
import { Modal, TextInput, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

//TODO Improve rough implementation of adding new shortcut such that it is saved between sessions.
//TODO Save shortcuts to database.
//TODO Create method of using existing url's favicon as icon for new shortcut instead of prompting user for svg
const NewShortcut = () => {

    const [opened, {open, close}] = useDisclosure(false);

    const [inputShortcutIcon, setInputShortcutIcon] = useState<string>('');
    const [inputShortcutUrl, setInputShortcutUrl] = useState<string>('');

    const [newShortcutIconError, setNewShortcutIconError] = useState<string>('');
    const [newShortcutUrlError, setNewShortcutUrlError] = useState<string>('');

    const [newShortcutIcon, setNewShortcutIcon] = useState<string>('');
    const [newShortcutUrl, setNewShortcutUrl] = useState<string>('');


    const onChangeInputShortcutUrl = (inputUrl: string) => {
        setNewShortcutUrlError('')
        setInputShortcutUrl(inputUrl);

        if(inputUrl === ''){
            setNewShortcutUrlError("Shortcut Url cannot be blank");
        }
    }

    const onChangeInputIcon = (inputIcon: string) => {
        setNewShortcutIconError('')
        setInputShortcutIcon(inputIcon);

        if(inputIcon === ''){
            setNewShortcutIconError("Shortcut icon cannot remain blank");
        }
    }

    const handleSubmitNewShortcut = () => {
        setNewShortcutIcon(inputShortcutIcon);
        setNewShortcutUrl(inputShortcutUrl);
        close();
    }

    return(
        <div className="p-4" onClick={() => console.log("Add new shortcut dialog :)")}>
            <Modal opened={opened} onClose={close} title="New Shortcut" centered>
                            <div>
                                <TextInput className="w-11/12" value={inputShortcutUrl} onChange={(e) => onChangeInputShortcutUrl(e.currentTarget.value)} placeholder="Shortcut Url" error={newShortcutUrlError}></TextInput>
                                <TextInput className="w-11/12" value={inputShortcutIcon} onChange={(e) => onChangeInputIcon(e.currentTarget.value)} placeholder="Shortcut Icon" error={newShortcutIconError}></TextInput>

                                <Button onClick={handleSubmitNewShortcut} className="bg-zinc-900">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#4ade80" stroke="#4ade80" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                                    </svg>
                                </Button>
                            </div>
                        </Modal>

            {
                newShortcutIcon === '' && newShortcutUrl === '' 
                ?
                <svg width="48" height="48" onClick={open} stroke="#4ade80" stroke-width="1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4.5V19.5M19.5 12L4.5 12"/>
                </svg>
                :
                <a href={newShortcutUrl}>
                    {newShortcutIcon}
                </a>
            }
        </div>
    )
}

export default NewShortcut;