#include "App.h"

namespace Titan
{

void App::run ()
{
    while (!window.ShouldClose())
    {
        glfwPollEvents();
#ifdef VULKAN
        vulkan.drawFrame();
#endif
    }

#ifdef VULKAN
    vulkan.idle();
#endif
}

}