#pragma once

#include "NewEngineWindow.h"
#include "NewEngineVulkan.h"

#include <string>

namespace NE
{

class NewEngineApp
{
public:
    NewEngineApp() {}

    static constexpr int WIDTH = 800;
    static constexpr int HEIGHT = 600;

    void run();

private:

    NewEngineWindow NEWindow {WIDTH, HEIGHT, "New Engine"};
    NewEngineVulkan NEVulkan {};
};

}