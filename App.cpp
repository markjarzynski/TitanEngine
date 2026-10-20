#include "App.h"

namespace Titan
{

void App::run ()
{
    const uint32_t LOOP_PER_GRAPHICS_PIPELINE = 3;

    uint32_t graphics_pipeline_index = 0;
    uint32_t loop = 0;

    while (!window.ShouldClose())
    {
        glfwPollEvents();

#ifdef VULKAN
        
        if (vulkan.getNumTimestampSamples() >= Graphics::NUM_TIMESTAMP_SAMPLES)
        {

            float timing = vulkan.getAvgTiming();
            if (loop == 0)
            {
                std::cout << vulkan.getGraphicsPipelineName(graphics_pipeline_index);
            }
            std::cout << ", " << timing;

            vulkan.resetTimings();
            loop++;

            if (loop >= LOOP_PER_GRAPHICS_PIPELINE)
            {
                std::cout << std::endl;
                loop = 0;
                graphics_pipeline_index++;
            }
        }

        if (graphics_pipeline_index >= vulkan.getGraphicsPipelineCount())
        {
            break;
        }

        vulkan.drawFrame(graphics_pipeline_index % vulkan.getGraphicsPipelineCount());

        //if (graphics_pipeline_index > vulkan.getGraphicsPipelineCount() && 
        //    graphics_pipeline_index / vulkan.getGraphicsPipelineCount() >= LOOP_PER_GRAPHICS_PIPELINE)
        //{
        //    break;
        //}
#endif
    }

    glfwPollEvents();

#ifdef VULKAN
    vulkan.idle();
#endif
}

}