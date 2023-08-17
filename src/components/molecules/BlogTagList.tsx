import React from 'react';
import useSWR from 'swr';

import { Tags } from '../../types/tag';

type Props = {
  id: string;
};

const Component: React.FC<Props> = ({ id }) => {
  const { data, error, isLoading } = useSWR<Tags>(
    `/_api/pages.getPageTag?pageId=${id}`,
  );

  if (error) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <ul className="flex items-center flex-wrap ml-2">
      {data &&
        data.tags &&
        data.tags.map((tag, index: number) => (
          <li
            key={index}
            className="mr-1 text-SubHeadline hover:underline hover:bg-SubHeadline hover:bg-opacity-10 rounded p-1 text-xs md:text-sm hover:outline outline-1 outline-SubHeadline"
          >
            <a href={process.env.REACT_APP_API_URL + `/_search?q=tag%3A${tag}`}>
              #{tag}
            </a>
          </li>
        ))}
    </ul>
  );
};

export default Component;