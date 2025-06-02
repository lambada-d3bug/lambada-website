import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'
import {ResponsiveGalleryBlock} from "@/blocks/responsive-gallery";


const blockComponents = {
responsiveGallery: ResponsiveGalleryBlock,
}

export const RenderBlocks: React.FC<{
    blocks: Page['layout']
}> = (props) => {
    const { blocks } = props

    const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

    if (hasBlocks) {
        return (
            <Fragment>
                {blocks.map((block, index) => {
                        const { blockType } = block

                        if (blockType && blockType in blockComponents) {
                            const Block = blockComponents[blockType]

                            if (Block) {
                                return (
                                    <div key={index}>
                                        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
                                        <Block {...(block as any)} />
                                </div>
                            )
                            }
                        }
                        return null
                    })}
            </Fragment>
        )
    }

    return null
}