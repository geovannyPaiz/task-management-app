import { Suspense } from "react";
import { Button } from "Components/atoms/Button";

const Modal = ({
  children,
  loading,
  labelSaveButton,
  visible,
  onSave,
  onCancel,
  disabled,
}: ModalProps) => {
  if (visible) {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div className="bg-[#000000CC] testing flex fixed left-0 right-0 top-0 bottom-0 z-[100] max-w-full max-h-screen justify-center items-center">
          <div
            className={`rounded-lg w-auto h-auto customScrol bg-gray3 py-2 gap-y-4`}
          >
            <div className={"px-4 pt-4"}>{children}</div>
            <div className={`flex flex-row justify-end px-4 gap-4 pb-4`}>
              <Button onClick={() => onCancel()} label="Cancel" type="normal" />
              <Button
                onClick={onSave}
                loading={loading}
                label={labelSaveButton}
                disabled={disabled}
              />
            </div>
          </div>
        </div>
      </Suspense>
    );
  }
  return null;
};

export default Modal;
