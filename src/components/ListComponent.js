import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { addComment } from '../../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => ({
    addComment: (author) => dispatch(addComment(author))
});

class List extends Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        console.log(this.props.comments);
        this.handleOnPress = this.handleOnPress.bind(this);
    }

    renderItem = ({ item }) => {
        return (<View style={{ justifyContent: 'center', height: 40 }}>
            <Text style={{ alignItems: 'center' }}>{item.author}</Text>
        </View>)
    }

    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "#000000",
                }}
            />
        );
    }

    handleOnPress() {
        this.props.addComment('New Row Item');
    }

    render() {
        return (<View style={{ flex: 1 }}>
            <Text onPress={this.handleOnPress} style={{ height: 40 }}>Click to Add</Text>
            <FlatList data={this.props.comments}
                keyExtractor={(item, index) => index.toString()}
                renderItem={this.renderItem}
                ItemSeparatorComponent={this.FlatListItemSeparator} />
        </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
