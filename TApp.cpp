#include "NewEngineApp.h"

namespace NE
{

void NewEngineApp::run ()
{
    while (!NEWindow.ShouldClose())
    {
        glfwPollEvents();
        NEVulkan.drawFrame();
    }

    NEVulkan.idle();
}

}