import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const BlogTab = ({ blogs }) => {
  const [activeId, setActiveId] = useState(blogs[0]?.id);
  const activeBlog = blogs.find(b => b.id === activeId) ?? blogs[0];

  return (
    <section className="flex flex-col lg:flex-row gap-10 lg:gap-14">
      {/* Sidebar */}
      <aside className="lg:w-1/4 border border-slate-200 bg-white rounded-xl p-4 lg:p-6 lg:sticky lg:top-32 self-start">
        <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 mb-4">
          Blog Articles
        </h2>
        <ul className="space-y-3">
          {blogs.map(blog => (
            <li key={blog.id}>
              <button
                onClick={() => setActiveId(blog.id)}
                className={`w-full text-left rounded-lg px-3 py-2 transition-colors ${
                  blog.id === activeId
                    ? 'bg-slate-900 text-white'
                    : 'hover:bg-slate-100 text-slate-700'
                }`}
              >
                <p className="text-xs font-semibold tracking-wide uppercase line-clamp-2">
                  {blog.title}
                </p>
                <p
                  className={`mt-1 text-[11px] ${
                    blog.id === activeId ? 'text-slate-200' : 'text-slate-500'
                  }`}
                >
                  {blog.date} • {blog.readTime}
                </p>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <article className="lg:w-3/4 flex-1 bg-white border border-slate-200 rounded-xl px-5 py-6 lg:px-10 lg:py-10 text-slate-800">
        <header className="mb-8 pb-6 border-slate-100 border-b">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-slate-500 mb-2">
            {activeBlog.date} • {activeBlog.readTime}
          </p>
          <h1 className="text-2xl lg:text-3xl font-serif font-semibold mb-3">
            {activeBlog.title}
          </h1>
          {activeBlog.tagline && (
            <p className="text-sm italic text-slate-600">
              {activeBlog.tagline}
            </p>
          )}
          {activeBlog.tags?.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {activeBlog.tags.map(tag => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-[0.2em] border border-slate-200 rounded-full px-2 py-1 text-slate-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {activeBlog.content ? (
          // Markdown-mode: nicely formatted markdown content
          <div className="text-[15px] leading-relaxed space-y-6">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]} // ➜ enable GFM tables
              components={{
                h1: ({ node, ...props }) => (
                  <h1 className="text-3xl lg:text-4xl font-serif font-semibold mt-2 mb-4" {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2 className="text-xl lg:text-2xl font-serif font-semibold mt-8 mb-3" {...props} />
                ),
                h3: ({ node, ...props }) => (
                  <h3 className="text-lg font-semibold mt-6 mb-2" {...props} />
                ),
                p: ({ node, ...props }) => <p className="mt-3 text-slate-800" {...props} />,
                strong: ({ node, ...props }) => <strong className="font-semibold" {...props} />,
                em: ({ node, ...props }) => <em className="italic" {...props} />,
                ul: ({ node, ...props }) => (
                  <ul className="list-disc list-inside space-y-1 mt-3" {...props} />
                ),
                ol: ({ node, ...props }) => (
                  <ol className="list-decimal list-inside space-y-1 mt-3" {...props} />
                ),
                li: ({ node, ...props }) => <li className="ml-1" {...props} />,
                blockquote: ({ node, ...props }) => (
                  <blockquote
                    className="border-l-2 border-slate-300 pl-4 italic text-slate-600 mt-4"
                    {...props}
                  />
                ),
                table: ({ node, ...props }) => (
                  <div className="overflow-x-auto mt-4">
                    <table
                      className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden"
                      {...props}
                    />
                  </div>
                ),
                thead: ({ node, ...props }) => <thead className="bg-slate-50" {...props} />,
                th: ({ node, ...props }) => (
                  <th
                    className="px-3 py-2 text-left font-medium text-slate-600 border-b border-slate-200"
                    {...props}
                  />
                ),
                td: ({ node, ...props }) => (
                  <td
                    className="px-3 py-2 align-top text-slate-700 border-b border-slate-100"
                    {...props}
                  />
                ),
              }}
            >
              {activeBlog.content}
            </ReactMarkdown>
          </div>
        ) : (
          // Legacy/structured-mode: keep your old sections rendering as fallback
          <div className="space-y-6 text-[15px] leading-relaxed">
            {activeBlog.sections?.map((section, idx) => {
              if (section.type === 'heading') {
                return (
                  <h2
                    key={idx}
                    className="text-xl font-serif font-semibold mt-6 pt-4 border-t border-slate-100"
                  >
                    {section.text}
                  </h2>
                );
              }
              if (section.type === 'paragraph') {
                return <p key={idx}>{section.text}</p>;
              }
              if (section.type === 'quote') {
                return (
                  <blockquote
                    key={idx}
                    className="border-l-2 border-slate-300 pl-4 italic text-slate-600"
                  >
                    {section.text}
                  </blockquote>
                );
              }
              if (section.type === 'table') {
                return (
                  <div key={idx} className="overflow-x-auto">
                    <table className="w-full text-sm border border-slate-200 rounded-lg overflow-hidden">
                      <thead className="bg-slate-50">
                        <tr>
                          {section.headers.map((h, i) => (
                            <th
                              key={i}
                              className="px-3 py-2 text-left font-medium text-slate-600 border-b border-slate-200"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.rows.map((row, rIdx) => (
                          <tr
                            key={rIdx}
                            className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                          >
                            {row.map((cell, cIdx) => (
                              <td
                                key={cIdx}
                                className="px-3 py-2 align-top text-slate-700 border-b border-slate-100"
                              >
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }
              return null;
            })}
          </div>
        )}
      </article>
    </section>
  );
};

export default BlogTab;
