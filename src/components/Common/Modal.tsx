import { ReactNode, CSSProperties } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import 'primeicons';
import { useState } from 'react';

export type ModalProps = {
  //모달의 제목(문자열만 들어올 수도 있고, 다양한 타입에 대해 열어두기 위해)
  title?: ReactNode;
  //마찬가지
  content?: ReactNode;
  //제목, 본문 이외의 요소들을 받음
  children?: ReactNode;
  //스타일 속성 주입
  style?: CSSProperties;
};

const CommonModal = ({ title, content, children, style }: ModalProps) => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <>
      <Button
        label="Show"
        icon="pi pi-external-link"
        onClick={() => setModal(true)}
      />
      {modal && (
        <Dialog style={style} visible={modal} onHide={() => setModal(false)}>
          {title && <h2>{title}</h2>}
          {content && <div>{content}</div>}
          {children && <>{children}</>}
        </Dialog>
      )}
    </>
  );
};

export default CommonModal;
