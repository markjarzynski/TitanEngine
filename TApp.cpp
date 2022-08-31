#include "TApp.h"

namespace Titan
{

void TApp::run ()
{
    while (!Window.ShouldClose())
    {
        glfwPollEvents();
        Vulkan.drawFrame();
    }

    Vulkan.idle();
}

}