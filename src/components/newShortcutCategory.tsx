
import { Modal, TextInput, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

//TODO Improve rough implementation of adding new shortcut category such that it is saved between sessions.
const NewShortcutCategory = () => {

    const [opened, {open, close}] = useDisclosure(false);

    const [inputCategory, setInputCategory] = useState<string>('')
    const [newCategoryError, setNewCategoryError] = useState<string>('')
    const [newCategoryName, setNewCategoryName] = useState<string>('');

    const onChangeInputCategory = (inputText: string) => {
        setNewCategoryError('')
        setInputCategory(inputText);

        if(inputText === ''){
            setNewCategoryError('New category name cannot be blank')
        }
        //TODO Add check against existing categories to avoid duplicates
    }

    const handleSubmitNewCategory = () => {
        if(newCategoryError === ''){
            setNewCategoryName(inputCategory);
            close();
        }
    }

    return(
        <div className="p-4 flex justify-center" >
            <Modal opened={opened} onClose={close} title="New Shortcut Category" centered>
                <div className="flex">
                    <TextInput className="w-11/12" value={inputCategory} onChange={(e) => onChangeInputCategory(e.currentTarget.value)} placeholder="Category Name" error={newCategoryError}></TextInput>
                    <Button onClick={handleSubmitNewCategory} className="bg-zinc-900">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#4ade80" stroke="#4ade80" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
                        </svg>
                    </Button>
                </div>
            </Modal>
            {newCategoryName !== ""
            ? 
                <h2>{newCategoryName}</h2>
            :
            <svg width="48" height="48" onClick={open} stroke="#4ade80" stroke-width="1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 4.5V19.5M19.5 12L4.5 12"/>
            </svg>
            }
            
        </div>
    )
}

export default NewShortcutCategory;