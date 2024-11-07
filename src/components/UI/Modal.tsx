import {
  ComponentPropsWithoutRef,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { createPortal } from "react-dom";

export type ModalHandle = {
  showModal: () => void;
};
type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};
const Modal = forwardRef<ModalHandle, ModalProps>(function Modal(
  { children, onClose }: ModalProps,
  ref
) {
  const modal = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      showModal() {
        console.log("show modal");
        if (modal.current) {
          modal.current.showModal();
        }
      },
    };
  });

  return createPortal(
    <dialog className="modal" ref={modal} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal-root")!
  );
});

export default Modal;
