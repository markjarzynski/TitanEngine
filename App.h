#pragma once

#include "Window.h"
#ifdef VULKAN
#include "Vulkan.h"
#endif

#include <string>
#include <ratio>

namespace Titan
{

class App
{
public:
    App() {}

    static constexpr int WIDTH = 3840;
    static constexpr int HEIGHT = 2160;

    void run();

private:

    Graphics::Window window {WIDTH, HEIGHT, "Titan Engine"};
#ifdef VULKAN
    Graphics::Vulkan vulkan {&window};
#endif
};

} // namespace Titan