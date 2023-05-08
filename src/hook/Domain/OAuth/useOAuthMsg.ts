import { useRef } from 'react';
import { Messages } from 'primereact/messages';

type MessageProps = {
  severity: 'success' | 'error' | 'warn' | 'info';
  summary: string;
  detail?: string;
};

const useOAuthMsg = () => {
  const msg = useRef<Messages | null>(null);

  const addMsg = ({ severity, summary, detail }: MessageProps) => {
    msg.current?.show({
      severity,
      summary,
      detail,
    });
  };

  const clearMsg = () => {
    msg.current?.clear();
  };

  return { msg, addMsg, clearMsg };
};

export default useOAuthMsg;
