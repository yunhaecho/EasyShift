import ModalActions from '@/app/components/modals/ModalActions';
import { DialogTitle } from '@headlessui/react';
import CalendarBlackIcon from '@/assets/icons/calendar-black.svg';
import UserBlackIcon from '@/assets/icons/user-black.svg';
import { Dialog } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { formatDateToText } from '@/utils/dateUtils';
import useWorkerList from '../hooks/useWorkerList';
import { User } from '@/api/endpoints/stores/types';
import MagnifyingGlassIcon from '@/assets/icons/magnifying-glass.svg';
import useUpdateShiftMutation from '@/api/endpoints/shifts/useUpdateShiftMutation';

const ShiftExchangeModal = ({
  isOpen,
  onClose,
  assignedShift,
  targetDate,
}: {
  isOpen: boolean;
  onClose: () => void;
  assignedShift: {
    shiftId: number;
    userId: number;
    userName: string;
  };
  targetDate: string;
}) => {
  const { searchQuery, setSearchQuery, filteredWorkers } = useWorkerList();
  const [showResults, setShowResults] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState<User | null>(null);
  const { mutate: updateShift } = useUpdateShiftMutation();

  useEffect(() => {
    if (!isOpen) {
      setSearchQuery('');
      setShowResults(false);
      setSelectedWorker(null);
    }
  }, [isOpen, setSearchQuery]);

  const handleWorkerSelect = (worker: User) => {
    setSelectedWorker(worker);
    setSearchQuery(worker.name);
    setShowResults(false);
  };

  const handleExchange = () => {
    if (selectedWorker) {
      updateShift({
        shiftId: assignedShift.shiftId,
        userId: selectedWorker.userId,
      });
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <article className="flex h-fit min-h-[30%] w-[50%] flex-col rounded-8 bg-white">
          <header>
            <DialogTitle className="head-20-600 px-24 py-16 text-gray-900">
              Shift Exchange
            </DialogTitle>

            <div className="flex gap-16 border-b border-gray-300 px-24 pb-16">
              <div className="flex items-center gap-8">
                <CalendarBlackIcon aria-hidden="true" />
                <span className="body-16-400 text-gray-700">
                  Selected Date: {formatDateToText(targetDate)}
                </span>
              </div>
              <div className="flex items-center gap-8">
                <UserBlackIcon aria-hidden="true" />
                <span className="body-16-400 text-gray-700">
                  Current Assignment: {assignedShift.userName}
                </span>
              </div>
            </div>
          </header>

          {/* Modal Content */}
          <main className="flex flex-1 flex-col overflow-y-auto px-24 py-16">
            <form className="flex flex-1 flex-col gap-24">
              <fieldset>
                <legend className="sr-only">Worker Exchange</legend>
                <div className="flex flex-col gap-4">
                  <label
                    htmlFor="worker-search"
                    className="body-16-500 text-gray-900"
                  >
                    Worker Name
                  </label>
                  <div className="relative flex w-[50%] items-center gap-12 border border-gray-400 px-12 py-9">
                    <MagnifyingGlassIcon />
                    <input
                      id="worker-search"
                      type="text"
                      placeholder="Search worker name"
                      role="combobox"
                      className="body-16-400 text-gray-900 focus:outline-none"
                      value={searchQuery}
                      onChange={e => {
                        setSearchQuery(e.target.value);
                        setShowResults(true);
                      }}
                      onFocus={() => setShowResults(true)}
                      aria-autocomplete="list"
                      aria-controls="worker-search-results"
                      aria-expanded={
                        showResults && searchQuery ? 'true' : 'false'
                      }
                    />

                    {showResults && searchQuery && (
                      <div
                        id="worker-search-results"
                        className="absolute left-0 right-0 top-full z-10 mt-4 max-h-200 overflow-y-auto rounded-4 border border-gray-300 bg-white shadow-lg"
                        role="listbox"
                      >
                        {filteredWorkers && filteredWorkers.length > 0 ? (
                          <ul className="flex flex-col">
                            {filteredWorkers?.map(worker => (
                              <li
                                key={worker.userId}
                                className="flex cursor-pointer flex-row items-center gap-8 p-12 hover:bg-gray-100"
                                onClick={() => handleWorkerSelect(worker)}
                                role="option"
                                aria-selected={
                                  selectedWorker?.userId === worker.userId
                                }
                              >
                                <div
                                  className="h-40 w-40 rounded-full border border-gray-300"
                                  aria-hidden="true"
                                />
                                <span className="body-14-400 text-gray-900">
                                  {worker.name}
                                </span>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <div className="body-14-400 py-2 text-center text-gray-600">
                            No results found
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </fieldset>

              {/* Exchange Details Section */}
              <section className="flex flex-col gap-16 rounded-8 bg-gray-100 p-16">
                <h3 className="body-18-500 text-gray-900">Exchange Details</h3>
                <dl className="flex gap-16">
                  <div className="flex flex-1 flex-col gap-8">
                    <dt className="body-14-500 text-gray-700">
                      Before Exchange
                    </dt>
                    <dd className="body-14-400 flex items-center gap-8 rounded-8 border border-gray-300 bg-white p-16 text-gray-700">
                      <div className="h-40 w-40 rounded-full border border-gray-300" />
                      <div>{assignedShift.userName}</div>
                    </dd>
                  </div>
                  <div className="flex flex-1 flex-col gap-8">
                    <dt className="body-14-500 text-gray-700">
                      After Exchange
                    </dt>
                    <dd className="body-14-400 h-full rounded-8 border border-gray-300 bg-white p-16 text-gray-700">
                      {selectedWorker ? (
                        <div className="flex items-center gap-8">
                          <div className="h-40 w-40 rounded-full border border-gray-300" />
                          <div>{selectedWorker.name}</div>
                        </div>
                      ) : (
                        <div className="flex h-full items-center justify-center text-gray-500">
                          Select a worker to exchange
                        </div>
                      )}
                    </dd>
                  </div>
                </dl>
              </section>
            </form>
          </main>

          <footer>
            <ModalActions
              mode="default"
              onClose={onClose}
              onSubmit={handleExchange}
            />
          </footer>
        </article>
      </div>
    </Dialog>
  );
};

export default ShiftExchangeModal;
