import React from 'react';

export default function Status({ status }: { status?: string }) {
  if (status === 'pending') {
    return (
      <span className="caption-12-500 rounded-50 bg-orange-100 px-8 py-3 text-orange-400">
        Pending
      </span>
    );
  }

  if (status === 'completed') {
    return (
      <span className="caption-12-500 rounded-50 bg-green-100 px-8 py-3 text-green-400">
        Completed
      </span>
    );
  }
}
