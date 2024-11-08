import { FormEvent, useEffect, useRef } from "react";
import Modal, { type ModalHandle } from "./UI/Modal";
import Input from "./UI/Input";
import { Session, useSessionsContext } from "../store/sessions-context";
import Button from "./UI/Button";

type BookSessionProps = {
  session: Session;
  onDone: () => void;
};

export default function BookSession({ session, onDone }: BookSessionProps) {
  const modal = useRef<ModalHandle>(null);
  const sessionCtx = useSessionsContext();

  useEffect(() => {
    if (modal.current) {
      modal.current.showModal();
    }
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    if (!formData.get("name") || !formData.get("email")) {
      return;
    }

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
    };

    console.log(data);
    sessionCtx.bookSession(session);
    onDone();
  }

  return (
    <Modal ref={modal} onClose={onDone}>
      <h2>Book Session</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Your name" id="name" name="name" type="text" required />
        <Input
          label="Your email"
          id="email"
          name="email"
          type="email"
          required
        />
        <p className="actions">
          <Button type="button" textOnly onClick={onDone}>
            Cancel
          </Button>
          <Button>Book Session</Button>
        </p>
      </form>
    </Modal>
  );
}
