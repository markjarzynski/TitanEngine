#include "App.h"

namespace Titan
{

void App::run ()
{
    const uint32_t TIME_PER_GRAPHICS_PIPELINE = 5000;
    const uint32_t LOOP_PER_GRAPHICS_PIPELINE = 9;
    const uint32_t INVALID_INDEX = 0xFFFFFFFFu;

    std::chrono::steady_clock::time_point start = std::chrono::high_resolution_clock::now();
    std::chrono::steady_clock::time_point now = start;
    std::chrono::steady_clock::time_point prev = now;

    while (!window.ShouldClose())
    {
        glfwPollEvents();

        prev = now;
        now = std::chrono::high_resolution_clock::now();
        const std::chrono::duration<double, std::milli> delta = now - prev;
        const auto milliseconds_since_start = std::chrono::duration_cast<std::chrono::milliseconds>(now - start);

        uint32_t graphics_pipeline_index = (milliseconds_since_start.count() / TIME_PER_GRAPHICS_PIPELINE);

#ifdef VULKAN
        vulkan.drawFrame(graphics_pipeline_index % vulkan.getGraphicsPipelineCount());

        if (graphics_pipeline_index > vulkan.getGraphicsPipelineCount() && 
            graphics_pipeline_index / vulkan.getGraphicsPipelineCount() >= LOOP_PER_GRAPHICS_PIPELINE)
        {
            break;
        }
#endif
    }

    glfwPollEvents();
    vulkan.drawFrame(INVALID_INDEX);

#ifdef VULKAN
    vulkan.idle();
#endif
}

}