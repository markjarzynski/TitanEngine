#pragma once

#include "Window.h"
#include "Vulkan.h"

#include <string>

namespace Titan
{

class App
{
public:
    App() {}

    static constexpr int WIDTH = 800;
    static constexpr int HEIGHT = 600;

    void run();

private:

    Window window {WIDTH, HEIGHT, "Titan Engine"};
    Vulkan vulkan {&window};
};

} // namespace Titan