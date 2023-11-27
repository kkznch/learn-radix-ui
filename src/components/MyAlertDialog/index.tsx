import React from 'react';
import './style.css';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

export const MyAlertDialog = () => (
  <AlertDialog.Root>
    <AlertDialog.Trigger asChild>
      <button className="Button violet">アラートダイアログのボタンだよ</button>
    </AlertDialog.Trigger>
    <AlertDialog.Portal>
      <AlertDialog.Overlay className="AlertDialogOverlay" />
      <AlertDialog.Content className="AlertDialogContent">
        <AlertDialog.Title className="AlertDialogTitle">本当に本当に？</AlertDialog.Title>
        <AlertDialog.Description className="AlertDialogDescription">
          ここはアラートダイアログボタンの中だよ
        </AlertDialog.Description>
        <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
          <AlertDialog.Cancel asChild>
            <button className="Button mauve">キャンセル</button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <button className="Button red">本当です</button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog.Portal>
  </AlertDialog.Root>
);
