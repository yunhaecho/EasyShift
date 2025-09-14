import Image from 'next/image';
import SampleProfile from '@/assets/sample.png';
import PhoneIcon from '@/assets/icons/phone.svg';
import EmailIcon from '@/assets/icons/email.svg';
import { useSession } from 'next-auth/react';

const UserProfileCard = () => {
  const { data } = useSession();
  return (
    <aside className="h-full w-full bg-white px-32 py-36">
      <article className="flex flex-col">
        <header className="flex flex-col items-center justify-center">
          <Image
            src={SampleProfile}
            alt="User Profile Image"
            className="h-200 w-200 rounded-full object-cover"
          />
          <h1 className="head-24-600 mt-28">{data?.user.name}</h1>
          <p className="body-14-400 mt-4 text-gray-600">{data?.user.role}</p>
        </header>

        <dl className="mt-24 flex flex-col gap-24 p-10">
          {/* 가입일 정보 */}
          <div className="flex flex-col gap-8">
            <dt className="body-14-500 text-gray-600">Member since</dt>
            <dd className="body-16-400 text-gray-900">March 15, 2023</dd>
          </div>

          {/* 연락처 정보 */}
          <div className="flex flex-col gap-8">
            <dt className="body-14-500 text-gray-600">Contact Information</dt>
            <dd>
              <address className="not-italic">
                <div className="flex items-center gap-12">
                  <PhoneIcon aria-hidden="true" className="mt-2" />
                  <span className="body-16-400 text-gray-900">
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="mt-12 flex items-center gap-12">
                  <EmailIcon aria-hidden="true" className="mt-1" />
                  <span className="body-16-400 text-gray-900">
                    sarah.j@example.com
                  </span>
                </div>
              </address>
            </dd>
          </div>

          {/* 역할 정보 */}
          <div className="flex flex-col gap-8">
            <dt className="body-14-500 text-gray-600">Role</dt>
            <dd className="body-16-400 text-gray-900">{data?.user.role}</dd>
          </div>
        </dl>
      </article>
    </aside>
  );
};

export default UserProfileCard;
