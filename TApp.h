#pragma once

#include "TWindow.h"
#include "TVulkan.h"

#include <string>

namespace Titan
{

class TApp
{
public:
    TApp() {}

    static constexpr int WIDTH = 800;
    static constexpr int HEIGHT = 600;

    void run();

private:

    TWindow Window {WIDTH, HEIGHT, "Titan Engine"};
    TVulkan Vulkan {&Window};
};

} // namespace Titan