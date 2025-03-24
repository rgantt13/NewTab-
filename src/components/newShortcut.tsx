import { Modal, TextInput, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

//TODO Improve rough implementation of adding new shortcut such that it is saved between sessions.
//TODO Save shortcuts to database.
//TODO Create method of using existing url's favicon as icon for new shortcut instead of prompting user for svg

interface Form {
  inputShortcutIcon: string;
  inputShortcutUrl: string;
  errors: string[];
}

interface Shortcut {
  url: string;
  icon: string;
}

const NewShortcut = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [newShorcutForm, setNewShorcutForm] = useState<Form>({
    inputShortcutIcon: "",
    inputShortcutUrl: "",
    errors: [],
  });

  const [newShortcut, setNewShortcut] = useState<Shortcut>({
    url: "",
    icon: "",
  });

  const validateForm = (): boolean => {
    let valid = true;
    setNewShorcutForm({ ...newShorcutForm, errors: [] });
    const errors: string[] = [];
    if (newShorcutForm.inputShortcutIcon === "") {
      errors.push("Shortcut icon cannot remain blank");
      console.error("NO ICON");
      valid = false;
    }
    if (newShorcutForm.inputShortcutUrl === "") {
      errors.push("Shortcut Url cannot be blank");
      valid = false;
    }
    setNewShorcutForm({ ...newShorcutForm, errors: errors });

    return valid;
  };

  const handleSubmitNewShortcut = (e) => {
    console.log(e)
    e.preventDefault()
    const isValid = validateForm();
    if (isValid) {
      setNewShortcut({
        url: newShorcutForm.inputShortcutUrl,
        icon: newShorcutForm.inputShortcutIcon,
      });
      close();
    }
  };

  return (
    <div
      className="p-4"
      onClick={() => console.log("Add new shortcut dialog :)")}
    >
      <Modal opened={opened} onClose={close} title="New Shortcut" centered>
        <form onSubmit={handleSubmitNewShortcut}>
          <div>
            <TextInput
              className="w-11/12"
              value={newShorcutForm.inputShortcutUrl}
              onChange={(e) =>
                setNewShorcutForm({
                  ...newShorcutForm,
                  ["inputShortcutUrl"]: e.currentTarget.value,
                })
              }
              placeholder="Shortcut Url"
            ></TextInput>
            <TextInput
              className="w-11/12"
              value={newShorcutForm.inputShortcutIcon}
              onChange={(e) =>
                setNewShorcutForm({
                  ...newShorcutForm,
                  ["inputShortcutIcon"]: e.currentTarget.value,
                })
              }
              placeholder="Shortcut Icon"
            ></TextInput>

            {newShorcutForm.errors.length > 0 && (
              <div>
                {newShorcutForm.errors.map((error: string) => {
                  return <p>{error}</p>;
                })}
              </div>
            )}
            <Button className="bg-zinc-900"
            type="submit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#4ade80"
                stroke="#4ade80"
                className="bi bi-arrow-right-short"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
                />
              </svg>
            </Button>
          </div>
        </form>
      </Modal>

      {newShortcut.icon === "" && newShortcut.url === "" ? (
        <svg
          width="48"
          height="48"
          onClick={open}
          stroke="#4ade80"
          stroke-width="1"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 4.5V19.5M19.5 12L4.5 12" />
        </svg>
      ) : (
        <a href={newShortcut.url}>{newShortcut.icon}</a>
      )}
    </div>
  );
};

export default NewShortcut;
