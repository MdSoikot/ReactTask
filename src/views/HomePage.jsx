import React from 'react';
import { useState } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Tooltips from "./Tooltips";


function valuetext(value) {
    return `${value}`;
}


export default function HomePage() {
    const [page, setPage] = useState(0);
    const [sliderVal, setSliderVal] = useState(0);
    const [sliderMax, setSliderMax] = useState(10);
    const [config, setConfig] = useState({
        cpus: 1,
        mem: 1,
        storage: 25,
        transfer: 1
    });
    const [transfer, setTransfer] = useState(0);
    const [storage, settotalStorage] = useState(0);


    const packages = {
        standard:
            [{
                cpus: 1,
                storage: 25,
                mem: 1,
                transfer: 1
            },
            {
                cpus: 1,
                mem: 2,
                storage: 50,
                transfer: 2
            },
            {
                cpus: 2,
                mem: 4,
                storage: 80,
                transfer: 4
            },
            {
                cpus: 4,
                mem: 8,
                storage: 160,
                transfer: 5
            },
            {
                cpus: 6,
                mem: 16,
                storage: 320,
                transfer: 6
            },
            {
                cpus: 8,
                mem: 32,
                storage: 640,
                transfer: 7
            },
            {
                cpus: 12,
                mem: 48,
                storage: 960,
                transfer: 8
            },
            {
                cpus: 16,
                mem: 64,
                storage: 1280,
                transfer: 9
            },
            {
                cpus: 20,
                mem: 96,
                storage: 1920,
                transfer: 10
            },
            {
                cpus: 24,
                mem: 128,
                storage: 2560,
                transfer: 11
            },
            {
                cpus: 32,
                mem: 192,
                storage: 3840,
                transfer: 12
            }
            ],
        general_purpose: [
            {
                cpus: 2,
                mem: 8,
                storage: 25,
                transfer: 4
            }, {
                cpus: 4,
                mem: 16,
                storage: 50,
                transfer: 5
            }, {
                cpus: 8,
                mem: 32,
                storage: 100,
                transfer: 6
            }, {
                cpus: 16,
                mem: 64,
                storage: 200,
                transfer: 7
            }, {
                cpus: 32,
                mem: 128,
                storage: 400,
                transfer: 8
            }, {
                cpus: 40,
                mem: 160,
                storage: 500,
                transfer: 9
            }
        ],
        cpu_optimized: [
            {
                cpus: 2,
                mem: 4,
                storage: 25,
                transfer: 4
            }, {
                cpus: 4,
                mem: 8,
                storage: 50,
                transfer: 5
            }, {
                cpus: 8,
                mem: 16,
                storage: 100,
                transfer: 6
            }, {
                cpus: 16,
                mem: 32,
                storage: 200,
                transfer: 7
            }, {
                cpus: 32,
                mem: 64,
                storage: 400,
                transfer: 9
            }
        ],
        memory_optimized: [
            {
                cpus: 2,
                mem: 16,
                storage: 50,
                transfer: 4
            }, {
                cpus: 4,
                mem: 32,
                storage: 100,
                transfer: 6
            }, {
                cpus: 8,
                mem: 64,
                storage: 200,
                transfer: 7
            }, {
                cpus: 16,
                mem: 128,
                storage: 400,
                transfer: 8
            }, {
                cpus: 24,
                mem: 192,
                storage: 600,
                transfer: 9
            },
            {
                cpus: 32,
                mem: 256,
                storage: 800,
                transfer: 10
            }
        ]


    }


    const switcher = (e, newVal) => {
        setSliderVal(0)
        setPage(newVal)
        switch (newVal) {
            case 0:
                setConfig(packages.standard[0])
                break;
            case 1:
                setConfig(packages.general_purpose[0])
                break;

            case 2:
                setConfig(packages.cpu_optimized[0])

                break;
            case 3:
                setConfig(packages.memory_optimized[0])

                break;
            default:
                console.log('default');

        }
    }


    const sliderRange = (e, val) => {

        setSliderVal(val)
        switch (page) {

            case 0:

                setSliderMax(10)
                setConfig(packages.standard[0])
                switch (val) {

                    case 0:

                        setConfig(packages.standard[val])
                        break;
                    case 1:
                        setConfig(packages.standard[val])
                        break;
                    case 2:
                        setConfig(packages.standard[val])
                        break;
                    case 3:
                        setConfig(packages.standard[val])
                        break;
                    case 4:
                        setConfig(packages.standard[val])
                        break;
                    case 5:
                        setConfig(packages.standard[val])
                        break;
                    case 6:
                        setConfig(packages.standard[val])
                        break;
                    case 7:
                        setConfig(packages.standard[val])
                        break;
                    case 8:
                        setConfig(packages.standard[val])
                        break;
                    case 9:
                        setConfig(packages.standard[val])
                        break;
                    case 10:
                        setConfig(packages.standard[val])
                        break;
                    default:
                        console.log('default');
                }
                break;
            case 1:
                setSliderMax(5)
                switch (val) {
                    case 0:
                        setConfig(packages.general_purpose[val])
                        break;
                    case 1:
                        setConfig(packages.general_purpose[val])
                        break;
                    case 2:
                        setConfig(packages.general_purpose[val])
                        break;
                    case 3:
                        setConfig(packages.general_purpose[val])
                        break;
                    case 4:
                        setConfig(packages.general_purpose[val])
                        break;
                    case 5:
                        setConfig(packages.general_purpose[val])
                        break;
                    default:
                        console.log('default');
                }
                break;
            case 2:
                setSliderMax(4)
                switch (val) {
                    case 0:
                        setConfig(packages.cpu_optimized[val])
                        break;
                    case 1:
                        setConfig(packages.cpu_optimized[val])
                        break;
                    case 2:
                        setConfig(packages.cpu_optimized[val])
                        break;
                    case 3:
                        setConfig(packages.cpu_optimized[val])
                        break;
                    case 4:
                        setConfig(packages.cpu_optimized[val])
                        break;
                    default:
                        console.log('default');
                }
                break;

            case 3:
                setSliderMax(6)
                switch (val) {
                    case 0:
                        setConfig(packages.memory_optimized[val])
                        break;
                    case 1:
                        setConfig(packages.memory_optimized[val])
                        break;
                    case 2:
                        setConfig(packages.memory_optimized[val])
                        break;
                    case 3:
                        setConfig(packages.memory_optimized[val])
                        break;
                    case 4:
                        setConfig(packages.memory_optimized[val])
                        break;
                    case 5:
                        setConfig(packages.memory_optimized[val])
                        break;
                    default:
                        console.log('default');
                }
                break;

            default:
                setConfig(config)
                break;

        }

    }

    const totalStorage = (e, val) => {
        settotalStorage(val)
    }
    const totalTransfer = (e, val) => {
        setTransfer(val)
    }

    return (
        <div className="HomePage">
            <Card className="card" my="20px auto">
                <div className="content">
                    <h2>Build your Droplet</h2>
                    <Tabs
                        className="tabs"
                        onChange={switcher}
                        value={page}
                        indicatorColor="primary">
                        <Tab label="Standard" />
                        <Tab label="General Purpose" />
                        <Tab label="Cpu optimized" />
                        <Tab label="memory optimized" />
                    </Tabs>

                    <div className="tabItem">
                        <div className="configuration">
                            <h2>Configuration</h2>
                            <Slider
                                onChange={sliderRange}
                                value={sliderVal}
                                min={0}
                                max={sliderMax}
                                className="configRange"
                                getAriaValueText={valuetext}
                                aria-labelledby="discrete-slider-custom"
                            />

                        </div>
                        <Grid container spacing={0}>
                            <Grid item xs={6}>
                                <List className="configDetails">
                                    CPUs <span className="config-info">{config.cpus}</span>
                                </List>
                            </Grid>
                            <Grid item xs={6}>
                                <List className="configDetails">
                                    Memory <span className="config-info">{config.mem} GB</span>
                                </List>
                            </Grid>

                            <Grid item xs={6}>
                                <List className="configDetails">
                                    Storage <span className="config-info">{config.storage} GB</span>
                                </List>
                            </Grid>
                            <Grid item xs={6}>
                                <List className="configDetails">
                                    Transfer <span className="config-info">{config.transfer} TB</span>
                                </List>
                            </Grid>

                        </Grid>
                        <div className="sliderRange">
                            <h2>Total Storage  <span>+{storage} TB</span> </h2>
                            <Slider
                                onChange={totalStorage}
                                min={0}
                                max={10}
                                defaultValue={0}
                                ValueLabelComponent={Tooltips}
                                className="storageRange"
                                aria-label="custom thumb label"
                            />
                            <h2>Total Transfer <span>+{transfer} TB</span></h2>
                            <Slider
                                onChange={totalTransfer}
                                min={0}
                                max={10}
                                defaultValue={0}
                                ValueLabelComponent={Tooltips}
                                className="transferRange"
                            />
                        </div>

                    </div>

                </div>
            </Card>
        </div>
    )
}

