#include "App.h"

namespace Titan
{

void App::run ()
{
    while (!window.ShouldClose())
    {
        glfwPollEvents();
        vulkan.drawFrame();
    }

    vulkan.idle();
}

}