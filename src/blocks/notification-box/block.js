/**
 * BLOCK: ultimate-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//Import Icons
import info from './icons/info';
import success from './icons/success';
import warning from './icons/warning';

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const {
	registerBlockType,
	RichText,
	AlignmentToolbar,
	BlockControls,
	BlockAlignmentToolbar,
} = wp.blocks;

const {
	Toolbar,
	Button,
	Tooltip
} = wp.components;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'ub/notification-box', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __( 'Notification Box' ), // Block title.
	icon: 'info', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [
		__( 'notification' ),
		__( 'warning' ),
		__( 'info' ),
	],
    attributes: {
        ub_notify_info: {
            type: 'array',
            source: 'children',
            selector: '.ub_notify_info',
            default: 'Replace this text with your own text.'
        },
		ub_selected_notify: {
        	type: 'string',
			default: 'ub_notify_info'
		}
    },

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function( props ) {

        const onChangeNotifyInfo = value => {
            props.setAttributes ( { ub_notify_info: value } );
        };

		return (
			<div className={ props.className }>
                <RichText
                    tagName="div"
                    className="ub_notify_info"
					onChange={ onChangeNotifyInfo }
					value={ props.attributes.ub_notify_info }
                    focus={ props.focus }
                    keepPlaceholderOnFocus={true}
                />
			</div>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( props ) {
		return (
			<div className={ props.className }>
                <div class="ub_notify_info">
					{ props.attributes.ub_notify_info }
                </div>
			</div>
		);
	},
} );