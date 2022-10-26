import { Card, CardActionArea, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'
import dateFormat from 'dateformat'

class PostPreview extends React.Component {
  constructor (props) {
    super()
    this.props = props
    this.id = `/post/${props.post._id}`
    this.title = props.post.title
    this.author = props.post.author
    this.subject = props.post.subject
    this.date = dateFormat(new Date(props.post.createdAt), 'mmmm d, yyyy')
    this.text = props.post.text.slice(0, 450) + '...'

    this.subHeaderText = `${this.author} in ${this.subject} · ${this.date}`
  }

  render() { 
    return (
      <> 
        <Card variant='filled'>
          <CardActionArea href={this.id} sx={{ '.MuiCardActionArea-focusHighlight': { color: '#FFFFFF' }}}>
            <CardHeader sx={{ '.MuiCardHeader-title': { fontWeight: 'bold' }, '.MuiCardHeader-subheader': { fontSize: '0.9rem', marginTop: '2px' }}}
              title={this.title}
              subheader={this.subHeaderText}>
            </CardHeader>
            <CardContent sx={{ paddingTop: '0px' }}>
              <Typography>
                {this.text}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </>
    )
  }
}
 
export default PostPreview