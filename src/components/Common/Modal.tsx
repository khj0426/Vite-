import { ReactNode, CSSProperties } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import 'primeicons/primeicons.css';
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

  //버튼의 label지정
  label: string;
};

const CommonModal = ({
  title,
  content,
  children,
  style,
  label,
}: ModalProps) => {
  const [modal, setModal] = useState<boolean>(false);
  return (
    <aside
      style={{
        opacity: 1,
      }}
    >
      <Button onClick={() => setModal(true)} label={label} text></Button>
      {modal && (
        <Dialog
          style={style}
          visible={modal}
          onHide={() => setModal(false)}
          position="center"
        >
          {title && <>{title}</>}
          {content && <>{content}</>}
          {children && <>{children}</>}
        </Dialog>
      )}
    </aside>
  );
};

export default CommonModal;
