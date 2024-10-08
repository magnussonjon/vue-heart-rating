import {mount} from '@vue/test-utils'
import Heart from '../src/heart.vue'
import HeartRating from "../src/heart-rating"


var defaultProps = {
    fill: 50,
    size: 40,
    heartId: 1,
    activeColor: 'yellow',
    inactiveColor: 'grey',
    borderColor: '#000',
    activeBorderColor: '#fff',
    borderWidth: 0,
    roundedCorners: true,
    rtl: false,
    glow: 1,
    glowColor: '#000',
    animate: true
};


describe('Heart Component', () => {

    it('should set the props', () => {
        const wrapper = mount(Heart, {
            propsData: defaultProps
        })
        const props = wrapper.props()

        expect(props.fill).toEqual(50);
        expect(props.size).toEqual(40);
        expect(props.heartId).toBe(1);
        expect(props.activeColor).toBe('yellow');
        expect(props.inactiveColor).toBe('grey');
        expect(props.borderColor).toBe('#000');
        expect(props.activeBorderColor).toBe('#fff');
        expect(props.borderWidth).toEqual(0);
        expect(props.roundedCorners).toBeTruthy()
        expect(props.rtl).toBeFalsy()
        expect(props.glow).toEqual(1)
        expect(props.glowColor).toEqual('#000')
        expect(props.animate).toBeTruthy()
        expect(props.activeBorderColor).toEqual("#fff")

    })

    it('should scale the heart based on size', () => {

        let heartPoints = [19.8, 2.2, 6.6, 43.56, 39.6, 17.16, 0, 17.16, 33, 43.56];

        // Double maximum size
        const wrapper = mount(Heart, {
            propsData: Object.assign(defaultProps, {
                roundedCorners: false,
                size: 87.12 // double maximum size
            })
        })

        let createdHeartPoints = wrapper.vm.heartPoints
        // expect each point to be doubled!
        for (var i = 0; i < heartPoints.length; i++) {
            expect(createdHeartPoints[i]).toEqual(heartPoints[i] * 2)
        }
    })

    it('should set the correct fill level when using rtl', () => {
        const wrapper = mount(Heart, {
            propsData: Object.assign(defaultProps, {
                fill: 51,
                rtl: true
            })
        });

        // right to left
        expect(wrapper.vm.heartFill).toEqual("49%");

    });

    it('should set the fill level', () => {

        const wrapper = mount(Heart, {
            propsData: defaultProps
        });
        let props = wrapper.props();

        expect(props.fill).not.toBe(undefined);
        expect(props.fill).not.toEqual(0);
    });

    it('should calculate the correct fill', () => {
        const wrapper = mount(Heart, {
            propsData: Object.assign(defaultProps, {
                fill: 50
            })
        });

        let props = wrapper.props();

        expect(props.fill).toEqual(50);
    });

    it('should set getBorderColor to borderColor prop when no fill is 0', () => {
        const wrapper = mount(Heart, {
            propsData: Object.assign(defaultProps, {
                fill: 0,
                borderColor: "#bada55",
                activeBorderColor: "#123456"
            })
        });
        expect(wrapper.vm.getBorderColor).toBe("#bada55");

    })

    it('should set getBorderColor to activeBorderColor prop when no fill is more than 0', () => {
        const wrapper = mount(Heart, {
            propsData: Object.assign(defaultProps, {
                fill: 1,
                borderColor: "#bada55",
                activeBorderColor: "#123456"
            })
        });
        expect(wrapper.vm.getBorderColor).toBe("#123456");
    })


    it('should create a random gradient id', () => {
        const wrapper = mount(Heart, {
            propsData: defaultProps
        });

        expect(wrapper.vm.gradId.length > 0).toBeTruthy();
    });


    it('should not add the vue-heart-rating-heart-rotate class when animate is set to false', () => {
        const wrapper = mount(HeartRating)

        expect(wrapper.findAll('.vue-heart-rating-heart-rotate').length).toEqual(0)
    });


    it('should add the vue-heart-rating-heart-rotate class when animate is set to true', () => {
        const wrapper = mount(HeartRating,{
            propsData : {
                animate: true
            }
        })

        expect(wrapper.findAll('.vue-heart-rating-heart-rotate').length > 0).toBeTruthy()
    });

    describe('color parsing function', () => {
        it('should calculate hex(a) color and opacity', () => {
            const wrapper = mount(Heart, {
                propsData: Object.assign(defaultProps, {
                    fill: 50
                })
            });

            expect(wrapper.vm.getColor("#000")).toBe("#000");
            expect(wrapper.vm.getOpacity("#000")).toBe("1");

            expect(wrapper.vm.getColor("#0009")).toBe("#000");
            expect(wrapper.vm.getOpacity("#0009")).toBe("0.60");

            expect(wrapper.vm.getColor("#000000")).toBe("#000000");
            expect(wrapper.vm.getOpacity("#000000")).toBe("1");

            expect(wrapper.vm.getColor("#00000080")).toBe("#000000");
            expect(wrapper.vm.getOpacity("#00000080")).toBe("0.50");
        });

        it('should calculate rgb(a) color and opacity', () => {
            const wrapper = mount(Heart, {
                propsData: Object.assign(defaultProps, {
                    fill: 50
                })
            });

            expect(wrapper.vm.getColor('rgb(100, 100, 100)')).toBe("rgb(100, 100, 100)");
            expect(wrapper.vm.getOpacity('rgb(100, 100, 100)')).toBe("1");

            expect(wrapper.vm.getColor('rgba(100, 100, 100, 0)')).toBe("rgb(100, 100, 100)");
            expect(wrapper.vm.getOpacity('rgba(100, 100, 100, 0)')).toBe("0");

            expect(wrapper.vm.getColor('rgba(100, 100, 100, 0.67)')).toBe("rgb(100, 100, 100)");
            expect(wrapper.vm.getOpacity('rgba(100, 100, 100, 0.67)')).toBe(".67");

            expect(wrapper.vm.getColor('rgba(100, 100, 100, .67)')).toBe("rgb(100, 100, 100)");
            expect(wrapper.vm.getOpacity('rgba(100, 100, 100, .67)')).toBe(".67");

            expect(wrapper.vm.getColor('rgba(50%, 50%, 50%, .67)')).toBe("rgb(50%, 50%, 50%)");
            expect(wrapper.vm.getOpacity('rgba(50%, 50%, 50%, .67)')).toBe(".67");

            expect(wrapper.vm.getColor('rgba(100,100,100,.67)')).toBe("rgb(100,100,100)");
            expect(wrapper.vm.getOpacity('rgba(100,100,100,.67)')).toBe(".67");

            expect(wrapper.vm.getColor('rgba(100, 100, 100, 1)')).toBe("rgb(100, 100, 100)");
            expect(wrapper.vm.getOpacity('rgba(100, 100, 100, 1)')).toBe("1");
        });

        it('should calculate hsl(a) color and opacity', () => {
            const wrapper = mount(Heart, {
                propsData: Object.assign(defaultProps, {
                    fill: 50
                })
            });

            expect(wrapper.vm.getColor('hsl(100, 50%, 50%)')).toBe("hsl(100, 50%, 50%)");
            expect(wrapper.vm.getOpacity('hsl(100, 50%, 50%)')).toBe("1");

            expect(wrapper.vm.getColor('hsla(100, 50%, 50%, 0)')).toBe("hsl(100, 50%, 50%)");
            expect(wrapper.vm.getOpacity('hsla(100, 50%, 50%, 0)')).toBe("0");

            expect(wrapper.vm.getColor('hsla(100, 50%, 50%, 0.67)')).toBe("hsl(100, 50%, 50%)");
            expect(wrapper.vm.getOpacity('hsla(100, 50%, 50%, 0.67)')).toBe(".67");

            expect(wrapper.vm.getColor('hsla(100, 50%, 50%, .67)')).toBe("hsl(100, 50%, 50%)");
            expect(wrapper.vm.getOpacity('hsla(100, 50%, 50%, .67)')).toBe(".67");

            expect(wrapper.vm.getColor('hsla(100,50%,50%,.67)')).toBe("hsl(100,50%,50%)");
            expect(wrapper.vm.getOpacity('hsla(100,50%,50%,.67)')).toBe(".67");

            expect(wrapper.vm.getColor('hsla(100, 50%, 50%, 1)')).toBe("hsl(100, 50%, 50%)");
            expect(wrapper.vm.getOpacity('hsla(100, 50%, 50%, 1)')).toBe("1");
        });

    })

    describe('dom events', () => {
        it('should emit "heart-selected" event on click', async () => {
            const wrapper = mount(Heart, {
                propsData: defaultProps
            });

            let heart = wrapper.find('polygon')
            await heart.trigger('click')

            expect(wrapper.emitted()).toHaveProperty('heart-selected')

        });


        it('should emit "heart-mouse-move" event on mousemove', async () => {
            const wrapper = mount(Heart, {
                propsData: defaultProps
            });

            let heart = wrapper.find('polygon')
            await heart.trigger('mousemove')

            expect(wrapper.emitted()).toHaveProperty('heart-mouse-move')

        });
    });
});
