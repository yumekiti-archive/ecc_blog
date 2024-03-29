import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import BlogTagList from '../molecules/BlogTagList';
import BlogInfo from '../molecules/BlogInfo';

type Props = {
  id: string;
  user_id: string;
  user_name: string;
  user_image: string;
  created_at: Date;
  updated_at: Date;
  title: string;
  content: string;
};

const Component: React.FC<Props> = ({
  id,
  user_id,
  user_name,
  user_image,
  created_at,
  updated_at,
  title,
  content,
}) => (
  <div className="py-2">
    <div className="bg-Main p-6 md:px-16 rounded">
      <BlogInfo
        user_id={user_id}
        user_name={user_name}
        user_image={user_image}
        updated_at={updated_at}
        created_at={created_at}
      />
      <div className="mt-2">
        <h2 className="text-2xl font-bold text-Headline py-2 md:text-3xl">
          {title}
        </h2>
        <div className="flex flex-col">
          <BlogTagList id={id} />
        </div>
      </div>
      <div className="markdown-body py-12">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ node, ...props }) => (
              <h1 id={node.position?.start.line.toString()} {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 id={node.position?.start.line.toString()} {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 id={node.position?.start.line.toString()} {...props} />
            ),
            h4: ({ node, ...props }) => (
              <h4 id={node.position?.start.line.toString()} {...props} />
            ),
            h5: ({ node, ...props }) => (
              <h5 id={node.position?.start.line.toString()} {...props} />
            ),
            h6: ({ node, ...props }) => (
              <h6 id={node.position?.start.line.toString()} {...props} />
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  </div>
);

export default Component;
