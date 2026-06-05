import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Download = ({fileName, fileSize, fileType, imageSrc, fileUrl}) => {
  return (
    <div>
        <div className="flex items-start gap-2.5 w-full">
                <div className="flex flex-col gap-2.5">
                  <div className="leading-1.5 flex w-full items-center max-w-[320px] flex-col font-helony">
                    <div className="flex items-center justify-center bg-whitesecondary rounded-xl p-1 md:p-4">
                      <div className="me-2">
                        <span className="flex items-center justify-center gap-2 text-[2vw] md:text-[1.5vw] xl:text-[1.3vw] font-medium text-gray-900">
                          <Image src={imageSrc} width={15} height={15} alt={fileName}></Image>
                          {fileName}
                        </span>
                      </div>
                      <div className="inline-flex self-center items-center h-full">
                        <Link
                          className="inline-flex self-center items-center p-2 font-medium text-center text-gray-900 bg-whitesecondary rounded-lg hover:scale-150 transform transition-transform focus:ring-4 focus:outline-none focus:ring-gray-50"
                          type="button" href={fileUrl} target='_blank'
                        >
                          <svg
                            className="w-4 h-full text-gray-900 transform scale-125"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    </div>
  )
}

export default Download