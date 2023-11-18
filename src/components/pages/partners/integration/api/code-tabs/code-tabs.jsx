'use client';

import clsx from 'clsx';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';
import PropTypes from 'prop-types';
import { useState } from 'react';

import BashIcon from 'components/pages/partners/integration/images/bash.inline.svg';
import JavascriptIcon from 'components/pages/partners/integration/images/javascript.inline.svg';
import PHPIcon from 'components/pages/partners/integration/images/php.inline.svg';
import RubyIcon from 'components/pages/partners/integration/images/ruby.inline.svg';
import CodeBlock from 'components/shared/code-block/code-block';

const codeSnippets = [
  {
    name: 'Ruby',
    icon: RubyIcon,
    language: 'ruby',
    code: `    require 'uri'
    require 'net/http'
    require 'openssl'
    
    url = URI("https://console.neon.tech/api/v2/projects/project_id/branches")
    
    http = Net::HTTP.new(url.host, url.port)
    http.use_ssl = true
    
    request = Net::HTTP::Post.new(url)
    request["accept"] = 'application/json'
    request["content-type"] = 'application/json'
    
    response = http.request(request)
    puts response.read_body`,
  },
  {
    name: 'PHP',
    icon: PHPIcon,
    language: 'php',
    code: `    <?php
    require_once('vendor/autoload.php');
    
    $client = new \GuzzleHttp\Client();
    
    $response = $client->request('POST', 'https://console.neon.tech/api/v2/projects/project_id/branches', [
      'headers' => [
        'accept' => 'application/json',
        'content-type' => 'application/json',
      ],
    ]);
    
    echo $response->getBody();`,
  },
  {
    name: 'Node',
    icon: JavascriptIcon,
    language: 'javascript',
    code: `    const sdk = require('api')('@neon-tech/v2.0#end53sbljigaqpv');

    sdk.createProjectBranch({project_id: 'project_id'})
      .then(({ data }) => console.log(data))
      .catch(err => console.error(err));`,
  },
  {
    name: 'cURL',
    icon: BashIcon,
    language: 'bash',
    code: `    curl --request POST
    --url https://console.neon.tech/api/v2/projects/project_id/branches
    --header 'accept: application/json'
    --header 'content-type: application/json'`,
  },
];

const CodeTabs = ({ className = null }) => {
  const [activeLanguage, setActiveLanguage] = useState(codeSnippets[0].language);

  return (
    <div className={clsx(className, 'rounded-[10px] bg-gray-new-8')}>
      <div className="border-b border-gray-new-15 lg:flex">
        {codeSnippets.map(({ name, icon: Icon, language }, index) => (
          <button
            className={clsx(
              'relative px-3.5 py-3 transition-colors duration-200 after:absolute after:left-0 after:top-full after:-mt-px after:h-0.5 after:w-full after:transition-colors after:duration-200 hover:text-white lg:flex-1',
              language === activeLanguage
                ? 'text-white after:bg-green-45 md:after:bg-transparent'
                : 'text-gray-new-60 after:bg-transparent'
            )}
            type="button"
            key={index}
            onClick={() => setActiveLanguage(language)}
          >
            <Icon className="mr-2 inline-block h-6 w-6 md:mr-0 md:h-8 md:w-8" />
            <span className="md:hidden">{name}</span>
          </button>
        ))}
      </div>
      <div className="min-h-[383px] pb-7 pl-[18px] pt-[18px] lg:pb-6 lg:pl-3.5 lg:pt-3.5 md:py-4 md:pl-4">
        <LazyMotion features={domAnimation}>
          <AnimatePresence initial={false} mode="wait">
            {codeSnippets.map(
              ({ language, code }, index) =>
                language === activeLanguage && (
                  <m.div
                    className="dark"
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CodeBlock
                      className="code-block text-[15px]"
                      language={language}
                      isTrimmed={false}
                      showLineNumbers
                    >
                      {code}
                    </CodeBlock>
                  </m.div>
                )
            )}
          </AnimatePresence>
        </LazyMotion>
      </div>
    </div>
  );
};

CodeTabs.propTypes = {
  className: PropTypes.string,
};

export default CodeTabs;
