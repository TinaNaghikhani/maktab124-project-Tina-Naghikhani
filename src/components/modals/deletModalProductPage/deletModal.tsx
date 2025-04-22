import React from 'react';
import { dashboardLocalization } from '@/localization/localization';
import Button from '@/components/base/button/page';

interface DeletModalInterface {
  isOpen: boolean;
  onClose: () => void;
  onDelet: () => void;
}

export default function DeletModal({ onDelet, onClose, isOpen }: DeletModalInterface) {
  const { deletModal } = dashboardLocalization;

  if (!isOpen) {
    return null; // اگر مودال بسته باشد، هیچ چیزی رندر نمی‌شود
  }

  return (
    <div className="fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-xl text-black p-8 w-[400px] max-w-full">
        <button onClick={onClose} className="text-sm cursor-pointer self-end">
          X
        </button>
        <p className="text-3xl font-semibold text-center">{deletModal.text}</p>
        <div className="flex gap-4 justify-center mt-6">
          <Button
            onClick={onDelet}
            type={"button"}
            className={'bg-green-500 p-2 rounded-2xl text-2xl w-32 cursor-pointer'}
            label={deletModal.accept}
          />
          <Button
            onClick={onClose}
            type={"button"}
            className={'bg-red-500 p-2 rounded-2xl text-2xl w-32 cursor-pointer'}
            label={deletModal.canceled}
          />
        </div>
      </div>
    </div>
  );
}