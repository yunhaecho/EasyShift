const ModalActions = ({
  mode = 'default',
  onClose,
  onSubmit,
}: {
  mode: 'default' | 'add' | 'edit' | 'submit';
  onClose: () => void;
  onSubmit: (e: React.FormEvent<HTMLButtonElement>) => void;
}) => (
  <div className="flex justify-end gap-12 border-t border-gray-300 p-16">
    <button
      onClick={onClose}
      className="body-14-500 rounded-4 border border-gray-400 bg-white px-16 py-8 text-gray-900"
    >
      Cancel
    </button>
    <button
      onClick={onSubmit}
      className="body-14-500 rounded-4 bg-gray-900 px-16 py-8 text-white"
    >
      {mode === 'default'
        ? 'Confirm'
        : mode === 'add'
          ? 'Create'
          : mode === 'submit'
            ? 'Confirm'
            : 'Update'}
    </button>
  </div>
);

export default ModalActions;
