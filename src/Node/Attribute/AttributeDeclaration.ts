import AttributesContainer from "./AttributesContainer";

/**
 * The interface for declare attribute speciied in GOML.
 */
interface AttributeDeclation {
	  /**
     * Converter name, jThree will interpret the value using this class.
     */
    converter?: string;

    /**
     * default value of this attribute.
     */
    default?: any;

    /**
     * Whether this attribute accept change by interface or not.
     * default: false
     */
    constant?: boolean;

    /**
     * apply to event listener when attribute changed
     */
    onchange?: (attr: AttributesContainer) => void;

    onget?: (attr: AttributesContainer) => void;
}

export default AttributeDeclation;
